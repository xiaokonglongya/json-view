<template>
  <div id="jsoneditor" ref="JNERef"></div>
</template>
<script setup lang="ts">
import config from "./config";
import JSONEditor from "jsoneditor";
import { onMounted, ref } from "vue";
import 'jsoneditor/dist/jsoneditor.min.css'
const JNERef = ref();
const initEditor = () => {
  const editor = new JSONEditor(JNERef.value, config);
  // set json
  const initialJson = {
    Array: [1, 2, 3],
    Boolean: true,
    Null: null,
    Number: 123,
    Object: { a: "b", c: "d" },
    String: "Hello World",
  };
  editor.set(initialJson);

  // get json
  const updatedJson = editor.get();
};
onMounted(() => {
  initEditor();
});
</script>
<style scoped lang="less">
#jsoneditor {
  width: 500px;
  height: 500px;
}
</style>
