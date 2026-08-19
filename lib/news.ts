export type NewsStory = {
  slug: string
  category: string
  date: string
  title: string
  summary: string
  image: string
  imageAlt: string
  href: string
  linkLabel: string
}

export const newsStories: NewsStory[] = [
  {
    slug: "first-large-scale-medical-supply-pickup",
    category: "Shipment",
    date: "August 6, 2026",
    title: "30,000 pounds of unused supplies from OhioHealth",
    summary:
      "OhioHealth donated nearly 50 pallets of N95 respirators and reusable therapy packs—about 30,000 pounds, valued at $250,000. Brother's Brother Foundation is moving them through its medical aid network.",
    image: "/images/first-pickup.png",
    imageAlt: "Ben Kurian and Naman Soni after Project MedBridge's first large-scale medical supply pickup",
    href: "https://docs.google.com/document/d/1oQcBDR9lbj6V3FVwQwGQ6FcPGDEj1peFzVY8Bwttiq0/edit?tab=t.636fcn6cold2",
    linkLabel: "Read the press release",
  },
  {
    slug: "2026-carnegie-young-leaders-convening",
    category: "Recognition",
    date: "July 27, 2026",
    title: "Selected for the 2026 Carnegie Young Leaders class",
    summary:
      "Project MedBridge was one of 71 teams chosen nationwide, and one of two from Ohio. Ben Kurian attended the kickoff in New Brunswick, New Jersey. The program includes $7,500 in project support.",
    image: "/images/cyl-convening.jpg",
    imageAlt: "Ben Kurian with fellow Carnegie Young Leaders at the 2026 kickoff convening",
    href: "https://www.youtube.com/watch?v=8lhsXuLN2Fc",
    linkLabel: "Watch the pitch video",
  },
]
