async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("failed fetch data");
  }

  return res.json();
}

export default async function Product() {
  const data = await getData();

  return (
    <div>
      <h1> Product </h1>
      <div style={{ width: "80%", margin: "auto" }}>
        {data.map(
          (
            item: { id: number; title: string; body: string },
            index: number
          ) => {
            return (
              <a
                style={{ margin: "10px 0", display: "block" }}
                key={index}
                href={`/product/${item.id}`}
              >
                <div>
                  {item.id} - {item.title}
                </div>
              </a>
            );
          }
        )}
      </div>
    </div>
  );
}
