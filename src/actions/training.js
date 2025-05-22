import React from "react";
import { Text, Reply } from "@botonic/react";

export default class extends React.Component {
  render() {
    return (
      <>
        <Text>What do you need today for your training?</Text>
        <Text>
          <Reply payload="focus">Focus 🧘‍♀️</Reply>
          <Reply payload="motivate">Motivate 🚀</Reply>
        </Text>
      </>
    );
  }
}
