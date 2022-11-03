import { FlatList, Text, TouchableOpacity } from 'react-native';
import Contact from '../../components/Contact';

export default function ContactFlatList({ contacts, navigation }) {

  //console.log(contacts);

  const renderContact = ({ item }) => {
    return (
      <TouchableOpacity
      onPress={() => navigation.navigate('Details', { contact: item})}
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
