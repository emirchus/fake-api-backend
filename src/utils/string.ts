export function transformStringToArray({ value }): any[] {
  if (value === '') {
    return [];
  }

  if (value.startsWith('[')) {
    try {
      const parsed = JSON.parse(value);
      if (Array.isArray(parsed)) {
        return parsed;
      }

      return [];
    } catch (error) {
      return [];
    }
  }

  return value.split(',');
}
