import { addOneView } from "../api/request";
export default function useAddclick(id) {
  (async () => {
    const result = await addOneView(id);
    console.log(result);
  })(id);
}
