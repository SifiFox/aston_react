import {Provider} from "react-redux";
import {store} from "@/shared/redux/store/store";
import {Story} from "@storybook/blocks";


export const StoreDecorator = () => (
    <Provider store={store}>
        <Story/>
    </Provider>
)