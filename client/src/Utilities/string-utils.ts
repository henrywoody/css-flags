export function titleToKebabCase(value: string) {
    return value.toLowerCase().replace("'", "").split(/\s+/g).join("-");
}
