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
	rayRotation, rayAngle := getRayAngles(innerRadius, outerRadius, numRays)

	fmt.Printf("Ray rotation:\n\t%frad\n\t%fdeg\n", rayRotation, toDegrees(rayRotation))
	fmt.Printf("Ray angle:\n\t%frad\n\t%fdeg\n", rayAngle, toDegrees(rayAngle))

	if numRays % 4 != 0 {
		return
	}

	numDistinctAngles := numRays / 4 - 1


	fmt.Println("Useful variables:")

	fmt.Printf("    --sun-ray-rotation: %fdeg;\n", toDegrees(rayRotation))
	fmt.Printf("    --sun-ray-angle: %fdeg;\n", toDegrees(rayAngle))

	for i := 0; i < numDistinctAngles; i++ {
		fmt.Printf("    --sin-%d-sun-ray-rotation: %f;\n", i + 1, math.Sin(rayRotation * float64(i + 1)))
		fmt.Printf("    --cos-%d-sun-ray-rotation: %f;\n", i + 1, math.Cos(rayRotation * float64(i + 1)))
	}

	fmt.Println("\n\n")

	generateRayCSS(numRays)
}

// Finds the ray angle and rotation for a star given the inner and outer radii and the number of rays.
// Method involves circumscribing a polygon with n sides (where n is the number of rays) in the inner circle.
// Then calculate the height and base of the sector for each ray (same intersection points as outer ray) (using "sector"
// loosely here as the round portion of the sector is ignored).
// Then the base of the ray is the same as the base of the sector and the height of the ray is the difference between
// the outer radius and the sector height.
func getRayAngles(innerRadius, outerRadius float64, numRays int) (float64, float64) {
	// Note: names (width, height) refer to a ray at the top of the circle
	sectorAngle := 2 * math.Pi / float64(numRays)
	sectorHeight := innerRadius * math.Cos(sectorAngle / 2)

	rayWidth := 2 * innerRadius * math.Sin(sectorAngle / 2)
	rayHeight := outerRadius - sectorHeight
	rayAngle := 2 * math.Atan(rayWidth / 2 / rayHeight)

	return sectorAngle, rayAngle
}

func toRadians(degrees float64) float64 {
	return degrees * math.Pi / 180.0
}

func toDegrees(radians float64) float64 {
	return radians * 180.0 / math.Pi
}

func generateRayCSS(numRays int) {
	fmt.Println("        /* rays (clockwise starting at bottom) */")
	for i := 0; i < numRays; i++ {
		boxXPosition := "var(--sun-x)"
		boxYPosition := "var(--sun-y)"
		width := "var(--sun-outer-radius)"
		height := "var(--sun-outer-radius)"

		isOnBottom := i < numRays / 4 || i > numRays * 3 / 4
		isOnTop := i > numRays / 4 && i < numRays * 3 / 4
		isOnLeft := i < numRays / 2
		isOnRight := i > numRays / 2

		var angleNum int
		if i % (numRays / 2) > numRays / 4 {
			angleNum = i % (numRays / 4)
		} else {
			angleNum = numRays / 4 - i % (numRays / 4)
		}
		cosVar := fmt.Sprintf("var(--cos-%d-sun-ray-rotation)", angleNum)
		sinVar := fmt.Sprintf("var(--sin-%d-sun-ray-rotation)", angleNum)

		var xPosition, yPosition string
		if isOnBottom {
			yPosition = fmt.Sprintf("calc(var(--sun-outer-radius) * %s)", sinVar)
		}
		if isOnTop {
			yPosition = fmt.Sprintf("calc(100%% - var(--sun-outer-radius) * %s)", sinVar)
		}
		if isOnLeft {
			xPosition = fmt.Sprintf("calc(100%% - var(--sun-outer-radius) * %s)", cosVar)
		}
		if isOnRight {
			xPosition = fmt.Sprintf("calc(var(--sun-outer-radius) * %s)", cosVar)
		}

		isBottom := i == 0
		isLeft := float64(i) / float64(numRays / 4) == 1.0
		isTop := float64(i) / float64(numRays / 4) == 2.0
		isRight := float64(i) / float64(numRays / 4) == 3.0

		if isOnLeft || isLeft || isTop || isBottom {
			boxXPosition = "calc(var(--sun-x) - var(--sun-outer-radius))"
		}

		if isOnTop || isTop || isLeft || isRight {
			boxYPosition = "calc(var(--sun-y) - var(--sun-outer-radius))"
		}

		if isBottom || isTop {
			width = "calc(var(--sun-outer-radius) * 2)"
			xPosition = "50%"
			if isBottom {
				yPosition = "100%"
			}
			if isTop {
				yPosition = "0"
			}
		}
		if isLeft || isRight {
			height = "calc(var(--sun-outer-radius) * 2)"
			yPosition = "50%"
			if isLeft {
				xPosition = "0"
			}
			if isRight {
				xPosition = "100%"
			}
		}


		fmt.Printf(
`        conic-gradient(
            from calc(%d * var(--sun-ray-rotation) - var(--sun-ray-angle) / 2)
            at %s %s,
            var(--sun-color) 0 var(--sun-ray-angle),
            transparent 0 360deg
        ) no-repeat %s %s / %s %s,
`,
			i, xPosition, yPosition, boxXPosition, boxYPosition, width, height,
		)
	}
}