import Publisher from '../models/Publisher'
import Book from '../models/Book'

const publisher = async (req, res) => {
    console.log('출판사 등록 호출되었음')
    const { name } = req.body;

    const publisher = new Publisher({
        name,
    });
    
    await publisher.save();
    res.sendStatus(201);
    console.log(publisher);
};

const book = async (req, res) => {
    const { title, writer, publisher_name } = req.body;
    const publisher_id = await Publisher.findOne({name: publisher_name}).select('_id');

    console.log(publisher_name, publisher_id)
    const book = new Book({
        title,
        writer,
        publisher_id,
    });
    
    await book.save();
    res.sendStatus(201);
    console.log(book);
};

export { publisher, book };