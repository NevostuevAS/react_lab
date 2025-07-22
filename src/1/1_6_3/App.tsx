// 1_6_3 Refactor a series of ? : to if and variables 
function Drink({ name }: { name: string }) {
    let partOfPlant, caffeineContent, age;
    if (name === 'tea') {
        partOfPlant = 'leaf';
        caffeineContent = '15–70 mg/cup';
        age = '4,000+ years';
    }
    else {
        partOfPlant = 'bean';
        caffeineContent = '80–185 mg/cup';
        age = '1,000+ years';
    }
    return (
      <section>
          <h1>{name}</h1>
              <dt>Part of plant</dt>
              <dd>{partOfPlant}</dd>
              <dt>Caffeine content</dt>
              <dd>{caffeineContent}</dd>
              <dt>Age</dt>
              <dd>{age}</dd>
      </section>
  );
}

export default function DrinkList() {
  return (
      <div>
          <Drink name="tea" />
          <Drink name="coffee" />
      </div>
  );
}
