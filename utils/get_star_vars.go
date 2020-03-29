package main

import (
	"flag"
	"fmt"
	"math"
)

func main() {
	var variablePrefix string
	flag.StringVar(&variablePrefix, "p", "star", "Star variable prefix")
	var rotation float64
	flag.Float64Var(&rotation, "r", 0.0, "Star rotation, in degrees")
	flag.Parse()

	GetStarVariables(variablePrefix, rotation)
}

func GetStarVariables(variablePrefix string, rotation float64) {
	topCSSAngle := math.Mod(180.0+rotation, 360.0)
	topSin, topCos := getTriangleTrigValues(topCSSAngle)

	rightCSSAngle := topCSSAngle + 144.0
	rightSin, rightCos := getTriangleTrigValues(rightCSSAngle)

	leftCSSAngle := topCSSAngle - 144.0
	leftSin, leftCos := getTriangleTrigValues(leftCSSAngle)

	fmt.Printf(`--%s-top-angle: %.5fdeg;
	--%s-top-sin: %.5f;
	--%s-top-cos: %.5f;
	--%s-right-angle: calc(var(--%s-top-angle) + 144deg);
	--%s-right-sin: %.5f;
	--%s-right-cos: %.5f;
	--%s-left-angle: calc(var(--%s-top-angle) - 144deg);
	--%s-left-sin: %.5f;
	--%s-left-cos: %.5f;`,
		variablePrefix,
		topCSSAngle,
		variablePrefix,
		round(topSin, 5),
		variablePrefix,
		round(topCos, 5),
		variablePrefix,
		variablePrefix,
		variablePrefix,
		round(rightSin, 5),
		variablePrefix,
		round(rightCos, 5),
		variablePrefix,
		variablePrefix,
		variablePrefix,
		round(leftSin, 5),
		variablePrefix,
		round(leftCos, 5),
	)
}

func getTriangleTrigValues(cssAngle float64) (float64, float64) {
	angle := 90.0 - cssAngle - 180.0
	angleRadians := degreesToRadians(angle)
	sin := math.Sin(angleRadians)
	cos := math.Cos(angleRadians)
	return sin, cos
}

func degreesToRadians(angleDegrees float64) float64 {
	return angleDegrees * math.Pi / 180.0
}

func round(value float64, places int) float64 {
	multiplier := math.Pow(10, float64(places))
	return math.Round(value*multiplier) / multiplier
}
