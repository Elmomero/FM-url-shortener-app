import axios from "axios";
import { ShorterResponse } from "../types/types";
export const shorterLink = async (
  link: string
): Promise<ShorterResponse | undefined> => {
  try {
    const resp = await axios.get(
      `https://api.shrtco.de/v2/shorten?url=${link}`
    );
    const { short_link, original_link } = resp.data.result;
    return { short_link, original_link };
  } catch (error) {
    return undefined;
  }
};
