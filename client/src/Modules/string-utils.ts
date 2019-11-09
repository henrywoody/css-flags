export function titleToKebabCase(value: string) {
    return value.toLowerCase().split(/\s+/g).join("-");
}
