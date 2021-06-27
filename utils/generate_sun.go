package main

import (
	"flag"
	"fmt"
	"math"
)

func main() {
	var innerRadius, outerRadius float64
	var numRays int
	flag.Float64Var(&innerRadius, "i", 0.0, "Inner radius of the star")
	flag.Float64Var(&outerRadius, "o", 0.0, "Outer radius of the star")
	flag.IntVar(&numRays, "n", 0, "Number of rays on the star")
	flag.Parse()

	generateSun(innerRadius, outerRadius, numRays)
}

// Generates relevant variables for creating a sun.
// If the number of rays on the sun is divisible by 4, then full CSS code for the rays is generated.
func generateSun(innerRadius, outerRadius float64, numRays int) {
	rayOffsetAngle, rayAngle := getRayAngles(innerRadius, outerRadius, numRays)

	fmt.Printf("Ray rotation:\n\t%frad\n\t%fdeg\n", rayOffsetAngle, toDegrees(rayOffsetAngle))
	fmt.Printf("Ray angle:\n\t%frad\n\t%fdeg\n", rayAngle, toDegrees(rayAngle))

	if numRays%2 != 0 {
		return
	}

	fmt.Println("\nVariables:")

	fmt.Println("    --sun-x: ;")
	fmt.Println("    --sun-y: ;")
	fmt.Println("    --sun-color: ;")
	fmt.Printf("    --sun-outer-radius: calc(%f * var(--scale));\n", outerRadius)
	fmt.Printf("    --sun-ray-rotation: %fdeg;\n", toDegrees(rayOffsetAngle))
	fmt.Printf("    --sun-ray-angle: %fdeg;\n", toDegrees(rayAngle))

	var numCardinalRays int
	if numRays%4 == 0 {
		numCardinalRays = 4
	} else {
		numCardinalRays = 2
	}
	numDistinctAngles := (numRays - numCardinalRays) / 4

	for i := 0; i < numDistinctAngles; i++ {
		var offset float64
		if numRays%4 == 0 {
			offset = float64(i) + 1.0
		} else {
			offset = float64(i) + 0.5
		}

		fmt.Printf("    --sin-%d-sun-ray-rotation: %f;\n", i+1, math.Sin(rayOffsetAngle*offset))
		fmt.Printf("    --cos-%d-sun-ray-rotation: %f;\n", i+1, math.Cos(rayOffsetAngle*offset))
	}

	fmt.Println("\nRays definition:")
	generateRaysCSS(numRays, rayOffsetAngle)
}

// Finds the ray angle and rotation for a star given the inner and outer radii and the number of rays.
// Returns sectorAngle, rayAngle.
// The sectorAngle is the rotation needed for each ray, i.e. the angular difference between each ray. E.g. an 8-pointed
// star has a sectorAngle of pi/4rad or 45deg.
// The rayAngle is the interior angle of the ray.
//
// Method involves circumscribing a polygon with n sides (where n is the number of rays) in the inner circle. E.g. with
// an 8-pointed star, circumscribe an octagon inside the inner circle, the triangle formed from the center to each side
// is referred to here as the sector, the triangle formed from the side to the outer circle is the ray (together form
// a diamond shape).
//
// Then calculate the height and base of the sector for each ray (same intersection points as outer ray) (using "sector"
// loosely here as the round portion of the sector is ignored and instead is treated as a straight line (triangle base /
// secant line)). In other words, we use just the circumscribed polygon instead of the inner circle as a base.
// Then the base of the ray is the same as the base of the sector and the height of the ray is the difference between
// the outer radius and the sector height.
func getRayAngles(innerRadius, outerRadius float64, numRays int) (float64, float64) {
	// Note: names (width, height) refer to a ray oriented at the top of the circle
	//     width is the length of the base and height is the length of the ray
	sectorAngle := 2 * math.Pi / float64(numRays)
	sectorHeight := innerRadius * math.Cos(sectorAngle/2)

	rayWidth := 2 * innerRadius * math.Sin(sectorAngle/2)
	rayHeight := outerRadius - sectorHeight
	rayAngle := 2 * math.Atan(rayWidth/2/rayHeight)

	return sectorAngle, rayAngle
}

func toRadians(degrees float64) float64 {
	return degrees * math.Pi / 180.0
}

func toDegrees(radians float64) float64 {
	return radians * 180.0 / math.Pi
}

func generateRaysCSS(numRays int, rayOffsetAngle float64) {
	fmt.Println("        /* rays (clockwise starting at bottom) */")

	for i := 0; i < numRays; i++ {
		generateRayCSS(i, numRays, rayOffsetAngle)
	}
}

// Generates the CSS to produce one ray given the rotation of that individual
// ray.
// Rays are placed in a box that is either one half (if the ray goes in a
// cardinal direction) or one quarter (otherwise) of the box containing the
// whole star. This is done to prevent the ray flowing out on the other side of
// the star.
func generateRayCSS(rayNum int, numRays int, rayOffsetAngle float64) {
	rayPosition := getRayPosition(rayNum, rayOffsetAngle)

	cosVar, sinVar := getRayTrigVars(rayNum, numRays, rayPosition)
	xPosition, yPosition := getRayCoordinates(rayPosition, cosVar, sinVar)

	boxXPosition, boxYPosition := getRayBoxCoordinates(rayPosition)
	boxWidth, boxHeight := getRayBoxDimensions(rayPosition)

	fmt.Printf(
		`        conic-gradient(
            from calc(%d * var(--sun-ray-rotation) - var(--sun-ray-angle) / 2)
            at %s %s,
            var(--sun-color) 0 var(--sun-ray-angle),
            transparent 0 360deg
        ) no-repeat %s %s / %s %s,`+"\n",
		rayNum, xPosition, yPosition, boxXPosition, boxYPosition, boxWidth, boxHeight,
	)
}

type RayPosition struct {
	isTop      bool
	isBottom   bool
	isLeft     bool
	isRight    bool
	isOnTop    bool
	isOnBottom bool
	isOnLeft   bool
	isOnRight  bool
}

func (rp RayPosition) isCardinal() bool {
	return rp.isTop || rp.isBottom || rp.isLeft || rp.isRight
}

func (rp RayPosition) isOnBottomLeft() bool {
	return rp.isOnBottom && rp.isOnLeft
}

func (rp RayPosition) isOnTopLeft() bool {
	return rp.isOnTop && rp.isOnLeft
}

func (rp RayPosition) isOnTopRight() bool {
	return rp.isOnTop && rp.isOnRight
}

func (rp RayPosition) isOnBottomRight() bool {
	return rp.isOnBottom && rp.isOnRight
}

func getRayPosition(rayNum int, rayOffsetAngle float64) RayPosition {
	rayRotation := float64(rayNum) * rayOffsetAngle

	return RayPosition{
		isOnTop:    rayRotation > math.Pi/2 && rayRotation < math.Pi*3/2,
		isOnBottom: rayRotation < math.Pi/2 || rayRotation > math.Pi*3/2,
		isOnLeft:   rayRotation < math.Pi,
		isOnRight:  rayRotation > math.Pi,
		isBottom:   rayRotation == 0,
		isLeft:     rayRotation == math.Pi/2,
		isTop:      rayRotation == math.Pi,
		isRight:    rayRotation == math.Pi*3/2,
	}
}

func getRayTrigVars(rayNum int, numRays int, rayPosition RayPosition) (string, string) {
	if rayPosition.isCardinal() {
		return "", ""
	}

	var angleNum int
	if rayPosition.isOnTopLeft() || rayPosition.isOnBottomRight() {
		angleNum = rayNum%(numRays/2) - numRays/4
	} else {
		if numRays%4 == 0 {
			angleNum = numRays/4 - rayNum%(numRays/4)
		} else {
			angleNum = numRays/4 - rayNum%(numRays/2) + 1
		}
	}

	cosVar := fmt.Sprintf("var(--cos-%d-sun-ray-rotation)", angleNum)
	sinVar := fmt.Sprintf("var(--sin-%d-sun-ray-rotation)", angleNum)
	return cosVar, sinVar
}

func getRayCoordinates(rayPosition RayPosition, cosVar, sinVar string) (string, string) {
	var xPosition, yPosition string
	if rayPosition.isOnBottom {
		yPosition = fmt.Sprintf("calc(var(--sun-outer-radius) * %s)", sinVar)
	}
	if rayPosition.isOnTop {
		yPosition = fmt.Sprintf("calc(100%% - var(--sun-outer-radius) * %s)", sinVar)
	}
	if rayPosition.isOnLeft {
		xPosition = fmt.Sprintf("calc(100%% - var(--sun-outer-radius) * %s)", cosVar)
	}
	if rayPosition.isOnRight {
		xPosition = fmt.Sprintf("calc(var(--sun-outer-radius) * %s)", cosVar)
	}
	if rayPosition.isTop || rayPosition.isBottom {
		xPosition = "50%"
		if rayPosition.isBottom {
			yPosition = "100%"
		}
		if rayPosition.isTop {
			yPosition = "0"
		}
	}
	if rayPosition.isLeft || rayPosition.isRight {
		yPosition = "50%"
		if rayPosition.isLeft {
			xPosition = "0"
		}
		if rayPosition.isRight {
			xPosition = "100%"
		}
	}
	return xPosition, yPosition
}

func getRayBoxCoordinates(rayPosition RayPosition) (string, string) {
	boxXPosition := "var(--sun-x)"
	if rayPosition.isOnLeft || rayPosition.isLeft || rayPosition.isTop || rayPosition.isBottom {
		boxXPosition = "calc(var(--sun-x) - var(--sun-outer-radius))"
	}

	boxYPosition := "var(--sun-y)"
	if rayPosition.isOnTop || rayPosition.isTop || rayPosition.isLeft || rayPosition.isRight {
		boxYPosition = "calc(var(--sun-y) - var(--sun-outer-radius))"
	}
	return boxXPosition, boxYPosition
}

func getRayBoxDimensions(rayPosition RayPosition) (string, string) {
	width := "var(--sun-outer-radius)"
	if rayPosition.isBottom || rayPosition.isTop {
		width = "calc(var(--sun-outer-radius) * 2)"
	}

	height := "var(--sun-outer-radius)"
	if rayPosition.isLeft || rayPosition.isRight {
		height = "calc(var(--sun-outer-radius) * 2)"
	}

	return width, height
}
