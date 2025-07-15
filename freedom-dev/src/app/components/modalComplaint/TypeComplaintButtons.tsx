// components/modalComplaint/TypeComplaintButtons.tsx
import { View, Text } from "react-native";
import { Button } from "@ui-kitten/components";
import { modalComplaintStyle as styles } from "@/ui/styles/modalComplaint-style";
import { listTypeComplaint } from "./complaintTypes";
type Props = {
  selectedId: number | null;
  onSelect: (item: { id: number; name: string }) => void;
};
export const TypeComplaintButtons = ({ selectedId, onSelect }: Props) => {
  return (
    <View style={styles.listTypeComplaint}>
      {listTypeComplaint.map((item) => {
        const isSelected = selectedId === item.id;
        return (
          <View key={item.id} style={styles.listTypeButtons}>
            <Button
              style={styles.listButtonItem}
              status={isSelected ? "primary" : "basic"}
              appearance={isSelected ? "filled" : "outline"}
              onPress={() => onSelect(item)}
            >
              <Text
                style={styles.buttonText}
                numberOfLines={2}
                ellipsizeMode="tail"
              >
                {item.name}
              </Text>
            </Button>
          </View>
        );
      })}
    </View>
  );
};
