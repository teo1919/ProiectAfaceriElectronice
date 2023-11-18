const benefits = [
    {
      title: 'One low price',
      subtitle: 'Get our content now, cheap subscriptions.',
    },
    {
      title: 'Try now!',
      subtitle: 'Get the best content for the best prices',
    },
    {
      title: 'Only the best',
      subtitle: 'Professional content at the best prices',
    },
  ];
  
  export default function Benefits() {
    return (
      <div className="bg-black">
        <div className="column-padding">
          <div className="content-grid xl">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="spacing-base">
                <h3>{benefit.title}</h3>
                <br/>
                <div>{benefit.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  