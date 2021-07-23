export interface Space {
  m?: string;
  mb?: string;
  ml?: string;
  mr?: string;
  mt?: string;
  p?: string;
  pb?: string;
  pl?: string;
  pr?: string;
  pt?: string;
}

export const space = ({ m, mb, mt, ml, mr, p, pl, pt, pb, pr }: Space) => ({
  margin: m,
  "margin-bottom": mb,
  "margin-left": ml,
  "margin-right": mr,
  "margin-top": mt,
  padding: p,
  "padding-left": pl,
  "padding-right": pr,
  "padding-top": pt,
  "padding-bottom": pb,
});
