export const formControl = input => {

    let error = {}; 

    if (!input.name) error.name = 'Name is required'
    else if (!/^[^@#$%^&]+$/.test(input.name)) error.name = 'Name must not contain special characters (@#$%^&)'

    if(!input.description) error.description = 'Description is required'

    if(!input.genres.length) error.genres = 'Genres cannot be empty'

    if(!input.released) error.released = 'Released is required'
    else if (!/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/.test(input.released)) error.released = 'Release date must be in the format yyyy-mm-dd"'
    
    if(!input.rating) error.rating = 'Rating is required'
    else if (input.rating < 0 || input.rating > 5) error.rating = 'Rating must be a number between 0 and 5';

    if(input.image && !/^(ftp|http|https):\/\/[^ "]+$/.test(input.image)) error.image = "Image URL must have a valid URL format (http/https/ftp)"
    else if (input.image && !/(\.|=)(jpg|png|gif)$/i.test(input.image)) error.image = "Image URL must have a valid image format (jpg/png/gif)"

    if (!input.platforms.length) error.platforms = 'Platforms cannot be empty'
    
    return error;

}