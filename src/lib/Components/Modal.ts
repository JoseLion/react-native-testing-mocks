import { Modal } from "react-native";

import { mockComponent } from "../../helpers/mockComponent";
import { mockModal } from "../../helpers/mockModal";

const BaseMock = mockComponent(Modal);

export const ModalMock = mockModal(BaseMock);
