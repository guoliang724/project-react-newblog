import moment from "moment";

export default function dateConvert(timestamp) {
  var date = moment(parseInt(timestamp));
  var formateDate = date.format("MMM d , YYYY");
  return formateDate;
}

export const day = moment().format("DD");
