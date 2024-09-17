const type = 'video';

if (type === 'music') {
    console.log('Музыка');
} else if (type === 'video') {
    console.log('это видео бро...');
} else {
    console.log('Это не музыка бро!');
}

switch (type){
    case 'music':
        console.log('dolbit normalno');
        break;
    case 'video':
        console.log('pokazivaet normalno');
        break;
    default:
        console.log('ne slishno i ne vidno bro');
}


