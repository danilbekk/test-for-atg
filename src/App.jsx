import * as React from 'react';
import { Contacts } from './components/Contacts';
import { Input } from './components/input';

function App() {
  const [openContacts, setOpenContacts] = React.useState(false);
  const [contact, setContact] = React.useState({});
  const handleOpenContacts = () => setOpenContacts(true);

  const handleCloseContacts = () => setOpenContacts(false);
  return (
    <div className="App">
      <Input
        handleOpenContacts={handleOpenContacts}
        search
        value={contact.firstName}
        placeholder="Search users"
      />
      {openContacts && (
        <Contacts
          setContact={setContact}
          openContacts={openContacts}
          handleCloseContacts={handleCloseContacts}
        />
      )}
    </div>
  );
}

export default App;
