import Emoji from "../../components/composition/Emoji";
import Text from "../../components/composition/Text";

export default function Composition() {
  return <Emoji>{(addEmoji) => <Text addEmoji={addEmoji} />}</Emoji>;
}
