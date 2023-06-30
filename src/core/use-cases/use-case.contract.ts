export interface IUseCase<INPUT, OUTPUT> {
  handle(input: INPUT): Promise<OUTPUT>;
}
