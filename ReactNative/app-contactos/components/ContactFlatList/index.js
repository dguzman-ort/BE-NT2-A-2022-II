import { FlatList, Text, TouchableOpacity } from 'react-native';
import Contact from '../../components/Contact';
import Vehiculo from '../Vehiculo';

export default function ContactFlatList({ contacts, navigation }) {

  //console.log(contacts);

  const renderContact = ({ item }) => {
    return (
      <TouchableOpacity
      onPress={() => navigation.navigate('Details', { id: item.id})}
      >
        {/* <Contact contact={item} /> */}
        <Vehiculo vehiculo={item} showAll={false} />
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
