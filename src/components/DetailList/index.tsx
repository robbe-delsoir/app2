import * as React from 'react';
import { Announced } from '@fluentui/react/lib/Announced';
import { TextField, ITextFieldStyles } from '@fluentui/react/lib/TextField';
import { DetailsList, DetailsListLayoutMode, Selection, IColumn } from '@fluentui/react/lib/DetailsList';
import { MarqueeSelection } from '@fluentui/react/lib/MarqueeSelection';
import { mergeStyles } from '@fluentui/react/lib/Styling';
import { Text } from '@fluentui/react/lib/Text';


const items = [
  {
    title: "PMOL-2252-WF-2078 co-cap-po11",
    dataType: "Date & Time",
    computed: "Yes",
    editable: true,
    default: true,
    mandatory: true,
    key: 1,
  },
  {
    title: "PMOL-2252-WF-2078 co-cap-po11",
    dataType: "Date & Time",
    computed: "Yes",
    editable: true,
    default: true,
    mandatory: true,
    key: 2,
  },
  {
    title: "PMOL-2252-WF-2078 co-cap-po11",
    dataType: "Date & Time",
    computed: "Yes",
    editable: true,
    default: true,
    mandatory: true,
    key: 3,
  },
];

const columns = [
  {
    key: "title",
    name: "Title",
    fieldName: "title",
    minWidth: 100,
    maxWidth: 400,
    isResizable: true,
    isSorted: true,
    isSortedDescending: false,
    isPadded: true,
  },
  {
    key: "dataType",
    name: "Data Type",
    fieldName: "dataType",
    minWidth: 100,
    maxWidth: 200,
    isResizable: true,
    isSorted: true,
    isSortedDescending: false,
    isPadded: true,
  },
  {
    key: "computed",
    name: "Computed",
    fieldName: "computed",
    minWidth: 100,
    maxWidth: 200,
    isResizable: true,
    isSorted: true,
    isSortedDescending: false,
    isPadded: true,
  },
  {
    key: "editable",
    name: "Editable",
    fieldName: "editable",
    minWidth: 100,
    maxWidth: 200,
    isResizable: true,
    isSorted: true,
    isSortedDescending: false,
    isPadded: true,
  },
  {
    key: "default",
    name: "Default",
    fieldName: "default",
    minWidth: 100,
    maxWidth: 200,
    isResizable: true,
    isSorted: true,
    isSortedDescending: false,
    isPadded: true,
  },
  {
    key: "mandatory",
    name: "Mandatory",
    fieldName: "mandatory",
    minWidth: 100,
    maxWidth: 100,
    isResizable: true,
    isSorted: true,
    isSortedDescending: false,
    isPadded: true,
  },
]


export interface IDetailsListBasicExampleItem {
  title: string;
  dataType: string;
  computed: string;
  editable: boolean;
  default: boolean;
  mandatory: boolean;
  key: number;
}

export interface IDetailsListBasicExampleState {
  items: IDetailsListBasicExampleItem[];
  selectionDetails: string;
}

export default class ListComp extends React.Component<{}, IDetailsListBasicExampleState> {
  private _selection: Selection;
  private _allItems: IDetailsListBasicExampleItem[];
  private _columns: IColumn[];

  constructor(props: {}) {
    super(props);

    this._selection = new Selection({
      onSelectionChanged: () => this.setState({ selectionDetails: this._getSelectionDetails() }),
    });

    // Populate with items for demos.
    this._allItems = items;

    this._columns = columns;

    this.state = {
      items: items,
      selectionDetails: this._getSelectionDetails(),
    };
  }

  public render(): JSX.Element {
    const { items, selectionDetails } = this.state;

    return (
      <div>
        <MarqueeSelection selection={this._selection}>
          <DetailsList
            items={items}
            columns={this._columns}
            setKey="set"
            layoutMode={DetailsListLayoutMode.justified}
            selection={this._selection}
            selectionPreservedOnEmptyClick={true}
            ariaLabelForSelectionColumn="Toggle selection"
            ariaLabelForSelectAllCheckbox="Toggle selection for all items"
            checkButtonAriaLabel="select row"
          />
        </MarqueeSelection>
      </div>
    );
  }

  private _getSelectionDetails(): string {
    const selectionCount = this._selection.getSelectedCount();

    switch (selectionCount) {
      case 0:
        return 'No items selected';
      case 1:
        return '1 item selected: ';
      default:
        return `${selectionCount} items selected`;
    }
  }

  // private _onItemInvoked = (item: IDetailsListBasicExampleItem): void => {
  //   alert(`Item invoked: ${item.name}`);
  // };
}
