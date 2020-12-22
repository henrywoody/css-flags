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

	solveStar(innerRadius, outerRadius, numRays)
}

// Finds the ray angle and rotation for a star given the inner and outer radii and the number of rays.
// Method involves circumscribing a polygon with n sides (where n is the number of rays) in the inner circle.
// Then calculate the height and base of the sector for each ray (same intersection points as outer ray) (using "sector"
// loosely here as the round portion of the sector is ignored).
// Then the base of the ray is the same as the base of the sector and the height of the ray is the difference between
// the outer radius and the sector height.
func solveStar(innerRadius, outerRadius float64, numRays int) {
	// Note: names (width, height) refer to a ray at the top of the circle
	sectorAngle := 2 * math.Pi / float64(numRays)
	sectorHeight := innerRadius * math.Cos(sectorAngle / 2)

	rayWidth := 2 * innerRadius * math.Sin(sectorAngle / 2)
	rayHeight := outerRadius - sectorHeight
	rayAngle := 2 * math.Atan(rayWidth / 2 / rayHeight)

	fmt.Printf("Ray rotation:\n\t%frad\n\t%fdeg\n", sectorAngle, toDegrees(sectorAngle))
	fmt.Printf("Ray angle:\n\t%frad\n\t%fdeg\n", rayAngle, toDegrees(rayAngle))
}

func toRadians(degrees float64) float64 {
	return degrees * math.Pi / 180.0
}

func toDegrees(radians float64) float64 {
	return radians * 180.0 / math.Pi
}