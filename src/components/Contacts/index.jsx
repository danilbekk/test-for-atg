import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Dialog } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) => `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const contacts = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: 'Harvey', age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export const Contacts = ({ openContacts, handleCloseContacts, setContact }) => {
  const [selectionModel, setSelectionModel] = React.useState([]);
  const [checkedContact, setcheckedContact] = React.useState(null);

  const handleSetContact = () => {
    setContact(checkedContact);
  };

  return (
    <Dialog fullWidth maxWidth="md" open={openContacts} onClose={handleCloseContacts}>
      <div>
        <Button
          onClick={() => {
            handleSetContact();
            handleCloseContacts();
          }}
          variant="contained"
          disabled={!checkedContact}>
          Выбрать
        </Button>
        <Button onClick={handleCloseContacts}>Закрыть</Button>
      </div>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={contacts}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          selectionModel={selectionModel}
          hideFooterSelectedRowCount
          onSelectionModelChange={(selection) => {
            const selectionSet = new Set(selectionModel);
            const result = selection.filter((s) => !selectionSet.has(s));
            const foundContact = contacts.find((contact) => {
              if (selection.length === 1) {
                return selection[0] === contact.id;
              }
              if (selection.length > 1) {
                return selection[1] === contact.id;
              }
              return false;
            });

            if (selection.length === contacts.length) {
              setSelectionModel([]);
            } else if (selection.length > 1) {
              setSelectionModel(result);
              setcheckedContact(foundContact);
            } else {
              setSelectionModel(selection);
              setcheckedContact(foundContact);
            }
          }}
        />
      </div>
    </Dialog>
  );
};
