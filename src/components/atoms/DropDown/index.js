// @flow
import * as React from 'react';

import Dropdown from 'react-dropdown';
import { observer } from 'mobx-react';
import { toJS } from 'mobx';

type Props = {
  viewStore: Object,
};

const DropDown = (props: Props) => {
  const { viewStore } = props;
  console.log(props);
  const network = toJS(viewStore.currentNetwork);

  return (
    <Dropdown
      options={toJS(viewStore.networks)}
      onChange={(e) => viewStore.selectNetwork(e)}
      value={network}
      placeholder="Select an option"
      data-testid="dropdown"
    />
  );
};

export default observer(DropDown);
