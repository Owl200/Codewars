// Chuck Norris II - One Punch 7 kyu

const onePunch = items => (items == '' || typeof(items) != 'string') ? "Broken!" : (items.split(' ').sort().join(' ').replace(/[ae]/ig, ''))