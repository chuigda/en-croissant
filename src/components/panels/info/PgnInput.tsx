import { Checkbox, Group, Stack, Textarea, Text } from "@mantine/core";
import { useToggle } from "@mantine/hooks";
import { useContext } from "react";
import TreeContext from "../../common/TreeContext";

function PgnInput() {
  const tree = useContext(TreeContext);
  const [comments, toggleComments] = useToggle([true, false]);
  const [symbols, toggleSymbols] = useToggle([true, false]);
  const [variations, toggleVariations] = useToggle([true, false]);
  const root = tree.getTopVariation();
  return (
    <>
      <Stack spacing={0}>
        <Text fw="bold">PGN</Text>
        <Group>
          <Checkbox
            label="Comments"
            size="xs"
            checked={comments}
            onChange={() => toggleComments()}
          />
          <Checkbox
            label="Symbols"
            size="xs"
            checked={symbols}
            onChange={() => toggleSymbols()}
          />
          <Checkbox
            label="Variations"
            size="xs"
            checked={variations}
            onChange={() => toggleVariations()}
          />
        </Group>
        <Textarea readOnly value={root.getPGN(symbols, comments, variations)} />
      </Stack>
    </>
  );
}

export default PgnInput;