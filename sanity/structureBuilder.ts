// https://www.sanity.io/docs/structure-builder-cheat-sheet
import type { StructureBuilder } from '@sanity/structure';

export const structure = (S: typeof StructureBuilder) =>
  S.list()
    .title('Content')
    .items(S.documentTypeListItems());
