import { defineComponent, ref } from "vue";
import { ElInput } from 'element-plus'

export default defineComponent({
  name: 'pro-input',
  props: {
    value: String,
    type: String
  },
  emits: {
    change: null
  },
  setup(props, { emit }) {

    const { value, type } = props

    const val = ref(value)

    const init = () => {
      return <ElInput type={type} v-model={val.value} onInput={(v) => emit('change', v)}></ElInput>
    }

    return () => init()
  }
})