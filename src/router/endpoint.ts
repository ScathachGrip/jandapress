import { Router } from "express";
import cors from "cors";
import { searchHentaifox } from "../controller/hentaifox/hentaifoxSearch";
import { getHentaifox } from "../controller/hentaifox/hentaifoxGet";
import { getPururin } from "../controller/pururin/pururinGet";
import { randomHentaifox } from "../controller/hentaifox/hentaifoxRandom";
import { searchPururin } from "../controller/pururin/pururinSearch";
import { randomPururin } from "../controller/pururin/pururinRandom";
import { searchHentai2read } from "../controller/hentai2read/hentai2readSearch";
import { getHentai2read } from "../controller/hentai2read/hentai2readGet";
import { getSimplyhentai } from "../controller/simply-hentai/simply-hentaiGet";
import { getNhentai } from "../controller/nhentai/nhentaiGet";
import { searchNhentai } from "../controller/nhentai/nhentaiSearch";
import { relatedNhentai } from "../controller/nhentai/nhentaiRelated";
import { randomNhentai } from "../controller/nhentai/nhentaiRandom";
import { getAsmhentai } from "../controller/asmhentai/asmhentaiGet";
import { searchAsmhentai } from "../controller/asmhentai/asmhentaiSearch";
import { randomAsmhentai } from "../controller/asmhentai/asmhentaiRandom";
import { slow, limiter } from "../utils/limit-options";

function scrapeRoutes() {
  const router = Router();
  router.get("/hentaifox/search", cors(), searchHentaifox);
  router.get("/hentaifox/get", cors(), getHentaifox);
  router.get("/hentaifox/random", cors(), randomHentaifox);
  router.get("/pururin/get", cors(), getPururin);
  router.get("/pururin/search", cors(), searchPururin);
  router.get("/pururin/random", cors(), randomPururin);
  router.get("/hentai2read/search", cors(), searchHentai2read);
  router.get("/hentai2read/get", cors(), getHentai2read);
  router.get("/simply-hentai/get", cors(), getSimplyhentai);
  router.get("/asmhentai/get", cors(), getAsmhentai);
  router.get("/asmhentai/search", cors(), searchAsmhentai);
  router.get("/asmhentai/random", cors(), randomAsmhentai);
  router.get("/nhentai/get", cors(), getNhentai);
  router.get("/nhentai/search", cors(), searchNhentai);
  router.get("/nhentai/related", cors(), relatedNhentai);
  router.get("/nhentai/random", cors(), randomNhentai);

  return router;
}

export default scrapeRoutes;
