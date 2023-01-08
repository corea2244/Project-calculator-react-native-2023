import { Text, TouchableOpacity, View } from "react-native";

const COLOR = {
  RESULT: "#4e4c51",
  RESET: "#5f5e62",
  OPERATOR: "#f39c29",
  NUM: "#5c5674",
};

const Button = ({ text, onPress, flex, type }) => {
  const backgroundColor =
    type === "reset"
      ? COLOR.RESET
      : type === "operator"
      ? COLOR.OPERATOR
      : type === "num"
      ? COLOR.NUM
      : "transparent";

  return (
    <TouchableOpacity
      style={{
        flex: flex,
        backgroundColor: backgroundColor,
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        borderWidth: 0.2,
        borderColor: "black",
      }}
      onPress={onPress}
    >
      <Text style={{ color: "white", fontSize: 25 }}>{text}</Text>
    </TouchableOpacity>
  );
};

export default () => {
  return (
    <View style={{ width: 250 }}>
      <View style={{ flexDirection: "row", width: "100%" }}>
        <Button text="AC" type="reset" flex={3} onPress={() => null} />
        <Button text="/" type="operator" flex={1} onPress={() => null} />
      </View>

      <View style={{ flexDirection: "row", width: "100%" }}>
        <Button text="7" type="num" flex={1} onPress={() => null} />
        <Button text="8" type="num" flex={1} onPress={() => null} />
        <Button text="9" type="num" flex={1} onPress={() => null} />
        <Button text="X" type="operator" flex={1} onPress={() => null} />
      </View>

      <View style={{ flexDirection: "row", width: "100%" }}>
        <Button text="4" type="num" flex={1} onPress={() => null} />
        <Button text="5" type="num" flex={1} onPress={() => null} />
        <Button text="6" type="num" flex={1} onPress={() => null} />
        <Button text="-" type="operator" flex={1} onPress={() => null} />
      </View>

      <View style={{ flexDirection: "row", width: "100%" }}>
        <Button text="1" type="num" flex={1} onPress={() => null} />
        <Button text="2" type="num" flex={1} onPress={() => null} />
        <Button text="3" type="num" flex={1} onPress={() => null} />
        <Button text="+" type="operator" flex={1} onPress={() => null} />
      </View>

      <View style={{ flexDirection: "row", width: "100%" }}>
        <Button text="0" type="num" flex={2} onPress={() => null} />
        <Button text="." type="num" flex={1} onPress={() => null} />
        <Button text="=" type="operator" flex={1} onPress={() => null} />
      </View>
    </View>
  );
};
