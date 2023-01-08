import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useCalculator } from "./use-calculator";

const COLOR = {
  RESULT: "#4e4c51",
  RESET: "#5f5e62",
  OPERATOR: "#f39c29",
  NUM: "#5c5674",
};

const Button = ({ text, onPress, flex, type, isSelected }) => {
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
        borderWidth: isSelected ? 1 : 0.2,
        borderColor: "black",
      }}
      onPress={onPress}
    >
      <Text style={{ color: "white", fontSize: 25 }}>{text}</Text>
    </TouchableOpacity>
  );
};

export default () => {
  const {
    input,
    currentOperator,
    result,
    tempInput,
    tempOperator,
    hasInput,
    onPressNum,
    onPressOperator,
    onPressReset,
  } = useCalculator();

  return (
    <View style={{ flex: 1, width: 250, justifyContent: "center" }}>
      {__DEV__ && (
        <>
          <Text>input: {input}</Text>
          <Text>currentOperator: {currentOperator}</Text>
          <Text>result: {result}</Text>
          <Text>tempInput: {tempInput}</Text>
          <Text>tempOperator: {tempOperator}</Text>
        </>
      )}

      <View
        style={{
          backgroundColor: COLOR.RESULT,
          minHeight: 50,
          justifyContent: "center",
          alignItems: "flex-end",
          paddingVertical: 10,
          paddingHorizontal: 5,
        }}
      >
        <Text style={{ color: "white", fontSize: 35, textAlign: "right" }}>
          {input}
        </Text>
      </View>

      <View style={{ flexDirection: "row", width: "100%" }}>
        <Button
          text={hasInput ? "C" : "AC"}
          type="reset"
          flex={3}
          onPress={onPressReset}
        />
        <Button
          text="/"
          type="operator"
          flex={1}
          onPress={() => onPressOperator("/")}
          isSelected={currentOperator === "/"}
        />
      </View>

      <View style={{ flexDirection: "row", width: "100%" }}>
        {[7, 8, 9].map((num) => (
          <Button
            key={`num-${num}`}
            text={`${num}`}
            type="num"
            flex={1}
            onPress={() => onPressNum(num)}
          />
        ))}
        <Button
          text="*"
          type="operator"
          flex={1}
          onPress={() => onPressOperator("*")}
          isSelected={currentOperator === "*"}
        />
      </View>

      <View style={{ flexDirection: "row", width: "100%" }}>
        {[4, 5, 6].map((num) => (
          <Button
            key={`num-${num}`}
            text={`${num}`}
            type="num"
            flex={1}
            onPress={() => onPressNum(num)}
          />
        ))}
        <Button
          text="-"
          type="operator"
          flex={1}
          onPress={() => onPressOperator("-")}
          isSelected={currentOperator === "-"}
        />
      </View>

      <View style={{ flexDirection: "row", width: "100%" }}>
        {[1, 2, 3].map((num) => (
          <Button
            key={`num-${num}`}
            text={`${num}`}
            type="num"
            flex={1}
            onPress={() => onPressNum(num)}
          />
        ))}
        <Button
          text="+"
          type="operator"
          flex={1}
          onPress={() => onPressOperator("+")}
          isSelected={currentOperator === "+"}
        />
      </View>

      <View style={{ flexDirection: "row", width: "100%" }}>
        <Button text="0" type="num" flex={2} onPress={() => onPressNum(num)} />
        <Button text="." type="num" flex={1} onPress={() => null} />
        <Button
          text="="
          type="operator"
          flex={1}
          onPress={() => onPressOperator("=")}
        />
      </View>
    </View>
  );
};
