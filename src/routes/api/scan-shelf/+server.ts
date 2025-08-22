import { json, type RequestHandler } from "@sveltejs/kit";

export const POST: RequestHandler = async ({ request }) => {
    const { base64 } = await request.json();

    const bookArray = [
        { bookTitle: "The Diary of a CEO", author: "Steven Bartlett" },
        { bookTitle: "Invisible Women", author: "Caroline Criado Perez" },
        { bookTitle: "Where Good Ideas Come From", author: "Steven Johnson" },
        { bookTitle: "The Narrows", author: "Michael Connelly" },
        { bookTitle: "The Drop", author: "Michael Connelly" },
        { bookTitle: "The Black Ice", author: "Michael Connelly" },
        { bookTitle: "Emotional Entelligence", author: "Daniel Goleman" },
        { bookTitle: "How to Read a Book", author: "Mortimer J. Adler" },
        { bookTitle: "The Unfair Advantage", author: "Ash Ali" },
        { bookTitle: "The Collingridge Dilemma", author: "Jared Cohen" },
    ];

    return json({ bookArray });
}
