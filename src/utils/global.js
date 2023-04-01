export function getCategory(category) {
  let peopleCap = "";
  switch (category) {
    case "small":
      peopleCap = "2-4 orang";
      break;
    case "medium":
      peopleCap = "4-6 orang";
      break;
    case "large":
      peopleCap = "6-8 orang";
      break;
  }
  return peopleCap;
}

export const formatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  minimumFractionDigits: 0,
});
