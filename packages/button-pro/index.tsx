import { defineComponent } from "vue";
import { ElButton } from 'element-plus'

export default defineComponent({
  name: 'pro-button',
  props: {
    type: {
      type: String,
      default: () => ''
    }
  },
  setup(props, { slots }) {
    console.log(slots);

    const { type }: any = props

    const init = () => {
      return <ElButton type={type}>{slots.default ? slots.default() : ''}</ElButton>
    }

    return () => init()
  }
})