import { FlatList, Text } from 'react-native';
import Contact from '../../components/Contact';

export default function ContactFlatList({ contacts }) {

  //console.log(contacts);

  const renderContact = ({ item }) => {
    return (
        <Contact contact={item} />
    )
  }

  return (
    <FlatList
        data={contacts}
        renderItem={renderContact}
    />
    

  );
}
