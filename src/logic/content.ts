import { Document, useDocuments } from "iles";

// Quick start pages
export type QuickStartPageProps = {
  title: string;
  order: number;
};

export type QuickStartPage = Document<QuickStartPageProps>;

const quickStartPages: QuickStartPage[] =
  useDocuments<QuickStartPageProps>("~/pages/start").value;

export const sortedQuickStartPages: QuickStartPage[] = quickStartPages.sort(
  (p1: QuickStartPage, p2: QuickStartPage) => p1.order - p2.order
);

// Concept pages
export type ConceptPageProps = {
  title: string;
  id: string;
  readMore?: string[];
  related?: string[];
};

export type ConceptPage = Document<ConceptPageProps>;

export const conceptPages: ConceptPage[] =
  useDocuments<ConceptPageProps>("~/pages/concepts").value;

// Pagination
export const getPrevious = (order: number): QuickStartPage | undefined =>
  quickStartPages.find((p: QuickStartPage) => p.order === order - 1);

export const getNext = (order: number): QuickStartPage | undefined =>
  quickStartPages.find((p: QuickStartPage) => p.order === order + 1);

// Related concepts
export const relatedConceptPages = (ids: string[]): ConceptPage[] =>
  ids.map(
    (id: string) => conceptPages.find((page: ConceptPage) => page.id === id)!
  );
