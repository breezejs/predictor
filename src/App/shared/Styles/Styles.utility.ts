export function stylesUtility (defaultClass: string, input?: string): string {
  if (input) {
    return `${defaultClass} ${input}`;
  }

  return defaultClass;
}
