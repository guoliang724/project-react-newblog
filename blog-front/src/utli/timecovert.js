import moment from "moment";

export default function convert(timestamp) {
  return moment(parseInt(timestamp)).format("YY-MM-DD");
}
