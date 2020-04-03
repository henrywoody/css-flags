package main

import (
	"flag"
	"fmt"
	"io/ioutil"
	"os"
	"path"
	"path/filepath"
	"regexp"
	"strings"
)

func main() {
	var ownerName string
	flag.StringVar(&ownerName, "o", "", "Name of the owner (state, organization, etc.) of the flag")
	flag.Parse()
	ownerName = strings.TrimSpace(ownerName)

	if ownerName == "" {
		panic("Please proved an owner name (-o).")
	}

	MakeFlag(ownerName)
}

const mode os.FileMode = 0755

func MakeFlag(ownerName string) error {
	fmt.Printf("Making Flag for: %s.\n", ownerName)

	flagDir, err := makeFlagDirectory(ownerName)
	if err != nil {
		return err
	}

	err = makeFlagFiles(ownerName, flagDir)
	if err != nil {
		return err
	}

	fmt.Printf("Created flag directory for \"%s\" at: %s\n\n", ownerName, flagDir)

	flagsDir, _ := path.Split(flagDir)
	flagsIndex := path.Join(flagsDir, "index.tsx")
	fmt.Printf("Add the following lines to %s:\n\n", flagsIndex)
	componentName := getComponentName(ownerName)
	key := getFlagKey(ownerName)
	fmt.Printf("import %s from \"./%s\";\n", componentName, componentName)
	fmt.Printf("<%s key=\"%s\"/>,\n\n", componentName, key)

	return nil
}

func makeFlagDirectory(ownerName string) (string, error) {
	ex, err := os.Executable()
	if err != nil {
		return "", err
	}
	currentPath := filepath.Dir(ex)
	projectRootPath, _ := path.Split(currentPath)

	flagDir := path.Join(projectRootPath, "client", "src", "Flags", getComponentName(ownerName))
	err = os.Mkdir(flagDir, mode)
	if err != nil {
		return "", err
	}
	return flagDir, nil
}

func makeFlagFiles(ownerName, flagDir string) error {
	err := makeFlagIndexTSX(ownerName, flagDir)
	if err != nil {
		return err
	}

	err = makeFlagStyleCSS(ownerName, flagDir)
	if err != nil {
		return err
	}

	return nil
}

func makeFlagIndexTSX(ownerName, flagDir string) error {
	componentName := getComponentName(ownerName)

	fileContents := fmt.Sprintf(`import React from "react";
import FlagArea from "../../Components/FlagArea";
import DescriptionSection from "../../Components/DescriptionSection";
import ExternalLink from "../../Components/ExternalLink";
import "./style.css";


const %s: React.FC = () => {
    return (
        <FlagArea title="%s">
            <DescriptionSection title="Description">
                <p>
                    {/* [DESCRIPTION] */} (Source: <ExternalLink href=""></ExternalLink>)
                </p>
            </DescriptionSection>

            <DescriptionSection title="Construction">
                <p>
                    {/* [Construction] */}
                </p>
            </DescriptionSection>

            <DescriptionSection title="Sources">
                <ul className="citation-list">
                    { /*
                        <li>
                            [SITE]: <ExternalLink href="[URL]">"[ARTICLE]"</ExternalLink>
                        </li>
                    */ }
                </ul>
            </DescriptionSection>
        </FlagArea>
    )
}

export default %s;
`,
		componentName,
		ownerName,
		componentName,
	)
	return ioutil.WriteFile(path.Join(flagDir, "index.tsx"), []byte(fileContents), 0644)
}

func makeFlagStyleCSS(ownerName, flagDir string) error {
	flagClassName := getFlagCSSClassName(ownerName)

	fileContents := fmt.Sprintf(`%s {
    /* Define colors here */

    --aspect-ratio: calc(2 / 3);
}
`,
		flagClassName,
	)

	return ioutil.WriteFile(path.Join(flagDir, "style.css"), []byte(fileContents), 0644)
}

func getComponentName(ownerName string) string {
	return toPascalCase(ownerName)
}

func getFlagCSSClassName(ownerName string) string {
	return ".flag-" + toKebabCase(ownerName)
}

func getFlagKey(ownerName string) string {
	return toKebabCase(ownerName)
}

func toPascalCase(text string) string {
	re := regexp.MustCompile(`(^|\s+)([A-Za-z])`)
	casedText := re.ReplaceAllStringFunc(text, func(match string) string {
		return strings.TrimSpace(strings.ToUpper(match))
	})
	return casedText
}

func toKebabCase(text string) string {
	casedText := strings.ToLower(text)
	re := regexp.MustCompile(`\s+`)
	casedText = re.ReplaceAllString(casedText, "-")
	return casedText
}
