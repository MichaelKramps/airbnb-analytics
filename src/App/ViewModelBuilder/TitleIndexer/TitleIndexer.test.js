import TitleIndexer from "./TitleIndexer";

it('Start date index returned correctly', () => {
    let parsedCsv = ["123", "456", "start date"];
    

    let titleIndexes = TitleIndexer.getTitleIndexes(parsedCsv);

    expect(titleIndexes.startDateIndex).toBe(2)
});

it('End date index returned correctly', () => {
    let parsedCsv = ["123", "456", "something", "end date"];
    

    let titleIndexes = TitleIndexer.getTitleIndexes(parsedCsv);

    expect(titleIndexes.endDateIndex).toBe(3)
});

it('Book date index returned correctly', () => {
    let parsedCsv = ["123", "booked", "456", "something"];
    

    let titleIndexes = TitleIndexer.getTitleIndexes(parsedCsv);

    expect(titleIndexes.bookDateIndex).toBe(1)
});

it('Payment date index returned correctly', () => {
    let parsedCsv = ["123", "booked", "date", "something"];
    

    let titleIndexes = TitleIndexer.getTitleIndexes(parsedCsv);

    expect(titleIndexes.paymentDateIndex).toBe(2)
});

it('Number of nights index returned correctly', () => {
    let parsedCsv = ["nights", "booked", "date", "something"];
    

    let titleIndexes = TitleIndexer.getTitleIndexes(parsedCsv);

    expect(titleIndexes.numberNightsIndex).toBe(0)
});

it('Row type index returned correctly', () => {
    let parsedCsv = ["nights", "booked", "date", "type"];
    

    let titleIndexes = TitleIndexer.getTitleIndexes(parsedCsv);

    expect(titleIndexes.rowTypeIndex).toBe(3)
});

it('Listing name index returned correctly', () => {
    let parsedCsv = ["nights", "listing", "date", "type"];
    

    let titleIndexes = TitleIndexer.getTitleIndexes(parsedCsv);

    expect(titleIndexes.listingNameIndex).toBe(1)
});

it('Amount per night index returned correctly', () => {
    let parsedCsv = ["nights", "listing", "amount", "type"];
    

    let titleIndexes = TitleIndexer.getTitleIndexes(parsedCsv);

    expect(titleIndexes.amountPerNightIndex).toBe(2)
})

it('Amount paid out index returned correctly', () => {
    let parsedCsv = ["paid out", "listing", "date", "type"];
    

    let titleIndexes = TitleIndexer.getTitleIndexes(parsedCsv);

    expect(titleIndexes.amountPaidOutIndex).toBe(0)
});

it('Host fee index returned correctly', () => {
    let parsedCsv = ["paid out", "host fee", "date", "type"];
    

    let titleIndexes = TitleIndexer.getTitleIndexes(parsedCsv);

    expect(titleIndexes.hostFeeIndex).toBe(1)
});

it('Cleaning fee index returned correctly', () => {
    let parsedCsv = ["paid out", "host fee", "cleaning fee", "type"];
    

    let titleIndexes = TitleIndexer.getTitleIndexes(parsedCsv);

    expect(titleIndexes.cleaningFeeIndex).toBe(2)
});

it('Confirmation code index returned correctly', () => {
    let parsedCsv = ["confirmation code", "host fee", "cleaning fee", "type"];
    

    let titleIndexes = TitleIndexer.getTitleIndexes(parsedCsv);

    expect(titleIndexes.confirmationCodeIndex).toBe(0)
});