from openai import OpenAI

client = OpenAI(
    base_url="https://paid-ddc.xiolabs.xyz/v1",
    api_key="PAID API KEY"
)

# models = client.models.list()
# print("\nModels:")
# for model in models:
#     print(model)


completion = client.chat.completions.create(
  model="claude-3-5-sonnet-20240620",
  messages=[
    # {"role": "developer", "content": "You are a helpful assistant."},
    {"role": "user", "content": "How are you Doing’?"}
  ]
)

print("Normal Chat Completions:")
print(completion.choices[0].message)

completion = client.chat.completions.create(
    model="gpt-4o",
    messages=[
        {"role": "developer", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Congratulations !!!! Have a good day!!!!!"}
    ],
    stream=True
)

print("\nStream Chat Completions:")
for chunk in completion:
    print(chunk.choices[0].delta.content, end="", flush=True)


