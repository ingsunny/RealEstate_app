import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-lg text-yellow-500 font-extrabold">
        Edit app/index.tsx to edit this screen.
      </Text>
    </View>
  );
}