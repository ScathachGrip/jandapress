import { scrapeContent } from "../../scraper/pururin/pururinGetController";
import c from "../../utils/options";
import { logger } from "../../utils/logger";
import { isNumeric } from "../../utils/modifier";
import { Request, Response, NextFunction } from "express";

export async function getPururin(req: Request, res: Response, next: NextFunction) {
  try {
    const book = req.query.book as string;
    if (!book) throw Error("Parameter book is required");
    if (!isNumeric(book)) throw Error("Parameter book must be number");

    const url = `${c.PURURIN}/gallery/${book}/janda`;
    const data = await scrapeContent(url);
    logger.info({
      path: req.path,
      query: req.query,
      method: req.method,
      ip: req.ip,
      useragent: req.get("User-Agent")
    });
    return res.json(data);
  } catch (err: any) {
    next(Error(err.message));
  }
}