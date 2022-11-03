import { FlatList, Text, TouchableOpacity } from 'react-native';
import Contact from '../../components/Contact';

export default function ContactFlatList({ contacts }) {

  //console.log(contacts);

  const renderContact = ({ item }) => {
    return (
      <TouchableOpacity
      onPress={() => console.log("Deberiamos pasar al detail este contacto: ", item)}
      >
        <Contact contact={item} />
      </TouchableOpacity>
        
    )
  }

  return (
    <FlatList
        data={contacts}
        renderItem={renderContact}
    />
    

  );
}
