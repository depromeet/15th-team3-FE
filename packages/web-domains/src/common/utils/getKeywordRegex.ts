export const getKeywordRegex = (keyword: string) => {
  try {
    const escapedDash = keyword.replace(/\\/g, '\\');
    const escapedKeyword = escapedDash.replace(/[^ㄱ-ㅎ|ㅏ-ㅣ|가-햫|a-z|A-Z|0-9|\s]/g, '\\$&');
    const regex = new RegExp(`(${escapedKeyword})`, 'gi');
    return regex;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
