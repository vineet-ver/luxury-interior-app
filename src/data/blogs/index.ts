// ✅ STEP 1: TYPE ADD KARO (TOP PE)

type Blog = {
  slug: string;
  title: string;
  description: string;
  content: string;
  image?: string; // 🔥 IMPORTANT (error isi ki wajah se aa raha tha)
  category?: string;
};

// ✅ STEP 2: IMPORTS (AS IT IS — CHANGE NAHI KARNA)

import officeIdeas from "./office-ideas";
import luxuryDesign from "./luxury-design";
import interiorCost from "./interior-cost";
import principles from "./design-principles";
import courses from "./design-courses";
import compare from "./designer-vs-decorator";
import chooseDesigner from "./choose-designer";
import homeIdeas from "./home-ideas";
import officeCabin from "./office-cabin";
import smallOffice from "./small-office";
import trends from "./design-trends";
import commercialContractor from "./commercial-interior-contractor";
import commercialContractorGuide from "./commercial-interior-contractor-delhi-ncr-guide"; // ✅ NEW BLOG


// ✅ STEP 3: TYPE APPLY KARO

export const blogs: Blog[] = [
  commercialContractorGuide, // ✅ NEW — Top pe rakha for priority
  commercialContractor,
  officeIdeas,
  luxuryDesign,
  interiorCost,
  principles,
  courses,
  compare,
  chooseDesigner,
  homeIdeas,
  officeCabin,
  smallOffice,
  trends,

];