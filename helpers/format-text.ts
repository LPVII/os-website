// Convert a string to title case
export function titleCase(str): string {
  return str.replace(/(?:^|\s)\w/g, function(match) {
    return match.toUpperCase();
  })
}
